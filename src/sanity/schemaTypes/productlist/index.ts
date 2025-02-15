export const productList = {
    name:'productlist',
    title:'Product List',
    type:'document',
    fields:[
        {
            name:'id',
            title:'Product ID',
            type:'string'
        },
        {
            name:'productname',
            title:'Product Name',
            type:'string',
        },
        {
            name:'category',
               title:'Category Name',
            type:'string'
        },
        {
            name:'productimg',
               title:'Product Img',
            type:'image'
        },
        {
            name:'description',
               title:'Product Description',
            type:'text'
        },
        {
            name:'price',
            title:'Product Price',
            type:'number'
        },
        {
            name:'discount',
            title:'Discount',
            type:'number'
        },
        {
            name:'stock',
            title:'Product Stock',
            type:'number'
        },
        {
            name:'tags',
            title:'Product Tags',
            type:'array',
            of:[{type:'string'}]
        },
        {
            name:'productcolors',
            title:'Product Colors',
            type:'array',
            of:[{type:'string'}]
        },
        {
            name:'productsizes',
            title:'Product Sizes',
            type:'array',
            of:[{type:'string'}]
        },
        {
            name:'rating',
            title:'Product Rating',
            type:'number'
        },
        {
            name:'reviewlist',
            title:'Review List',
            type:'array',
            of:[{type:'object',fields:[
                {
                    name:'userreview',
                    title:'User Review',
                    type:'string'
                },
                {
                    name:'review',
                    title:'Review',
                    type:'text'
                },
                {
                    name:'timing',
                    title:'Timing',
                    type:'datetime',
                }
            ]}]
        },
        {
            name:'createdAt',
            title:'Created Date',
            type:'datetime',
            options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'HH:mm',
                timeStep: 30, // Allow selection in 30-minute intervals
                calendarTodayLabel: 'Set to Today',
              },
              initialValue: () => new Date().toISOString(), // Default to the current date and time
        },
        {
            name:'updatedAt',
            title:'Updated Date',
            type:'datetime'
        },
    ]
}