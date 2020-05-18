function GRID_DATA_COLUMN() {
  return {
    columnDefs: [
      {
        field: "resourceId",
        displayName: "Resource Id",
        filter: {
          placeholder: "Search Resource Id",
        },
        enableSorting: true,
        width: "*",
      },
      {
        field: "resourceType",
        displayName: "Resource Type",
        filter: {
          placeholder: "resourceType",
        },
        enableSorting: true,
        width: "*",
      },
      {
        field: "resourceVersion",
        displayName: "Resource Version",
        filter: {
          placeholder: "Resource Version",
        },
        enableSorting: true,
        width: "*",
      },
      {
        field: "referencedId",
        displayName: "Referenced Id",
        filter: {
          placeholder: "Referenced Id",
        },
        enableSorting: true,
        width: "*",
      },
      {
        field: "referencedType",
        displayName: "Referenced Type",
        filter: {
          placeholder: "Referenced Type",
        },
        enableSorting: true,
        width: "*",
      },
      {
        field: "status",
        displayName: "Status",
        filter: {
          placeholder: "Status",
        },
        enableSorting: true,
        width: "*",
      },
      {
        field: "receivedDate",
        displayName: "Received Date",
        filter: {
          placeholder: "Received Date",
        },
        enableSorting: true,
        width: "*",
      },
      {
        field: "updatedDate",
        displayName: "Updated Date",
        filter: {
          placeholder: "Updated Date",
        },
        enableSorting: true,
        width: "*",
      },
      {
        field: "exception",
        displayName: "Exception",
        filter: {
          placeholder: "Exception",
        },
        enableSorting: true,
        width: "*",
      },
      {
        field: "errorMessage",
        displayName: "Error Message",
        filter: {
          placeholder: "Error Message",
        },
        enableSorting: true,
        width: "*",
      },
      {
        field: "source",
        displayName: "Source",
        filter: {
          placeholder: "Source",
        },
        enableSorting: true,
        width: "*",
      },
      {
        field: "reprocessCount",
        displayName: "Reprocess Count",
        filter: {
          placeholder: "Reprocess Count",
        },
        enableSorting: true,
        width: "*",
      },
    ],
    enableColumnResizing: true,
    enableColumnMenus: false,
    enableFiltering: true,
    paginationPageSizes: [10, 25, 50, 75],
    paginationPageSize: 10,
    rowHeight: 30,
  };
}
