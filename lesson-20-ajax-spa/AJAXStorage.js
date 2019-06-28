'use strict';

function TAJAXStorage() {
  var self = this;
  self.StorageHash = {};
  var AjaxHandlerScript = 'http://fe.it-academy.by/AjaxStringStorage2.php';
  var UpdatePassword;

  $.ajax(
    {
      url: AjaxHandlerScript,
      type: 'POST',
      cache: false,
      data: {f: 'READ', n: 'KHIKHNAL_DRINKSTORAGE'},
      success: LoadData,
      error: ErrorHandler
    }
  );

  function LoadData(data) {
    if (data !== ' ') {
      self.StorageHash = JSON.parse(data.result);
      console.log('Data from server - ' + data.result);
    } else if (data === ' ') {
      $.ajax(
        {
          url: AjaxHandlerScript,
          type: 'POST',
          cache: false,
          data: {f: 'INSERT', n: 'KHIKHNAL_DRINKSTORAGE', v: JSON.stringify(self.StorageHash)},
          success: InsertData,
          error: ErrorHandler
        }
      );

      function InsertData(data) {
        console.log(data.result);
      }
    }
  }


  self.addValue = function (key, value) {
    self.StorageHash[key] = value;
    addValue(self.StorageHash);
  };

  self.getValue = function (key) {
    if (key in self.StorageHash) {
      return self.StorageHash[key];
    }
  };

  self.deleteValue = function (key) {
    if (key in self.StorageHash) {
      delete self.StorageHash[key];
      addValue(self.StorageHash);
    }
  };

  self.getKeys = function () {
    return (Object.keys(self.StorageHash));
  };


  function addValue(StorageHash) {
    UpdatePassword = Math.random();

    $.ajax(
      {
        url: AjaxHandlerScript,
        type: 'POST',
        data: {
          f: 'LOCKGET', n: 'KHIKHNAL_DRINKSTORAGE', p: UpdatePassword
        },
        cache: false,
        success: LockGetReady,
        error: ErrorHandler
      }
    );

    function LockGetReady(data) {
      if (data.error !== undefined) {
        alert(data.error);
      }
    }

    $.ajax(
      {
        url: AjaxHandlerScript,
        type: 'POST',
        data: {
          f: 'UPDATE', n: 'KHIKHNAL_DRINKSTORAGE',
          v: JSON.stringify(StorageHash), p: UpdatePassword
        },
        cache: false,
        success: UpdateData,
        error: ErrorHandler
      }
    );
  }
}

function UpdateData(data) {
  if (data.error != undefined)
    alert(data.error);
}


function ErrorHandler(jqXHR, StatusStr, ErrorStr) {
  console.log(StatusStr + ' ' + ErrorStr);
}
