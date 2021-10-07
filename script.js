let data = [
    {
      "date": "15 October 2021",
      "description": "Due date for issue of TDS Certificate for tax deducted under section 194-IB in the month of August, 2021",
      "title": "Due date for issue of TDS Certificate for tax deducted"
    },
    {
      "date": "15 October 2021",
      "description": "Due date for issue of TDS Certificate for tax deducted under section 194-IA in the month of August, 2021",
      "title": "Due date for issue of TDS Certificate for tax deducted"
    },
    {
      "date": "15 October 2021",
      "description": "Due date for issue of TDS Certificate for tax deducted under section 194M in the month of August, 2021",
      "title": "Due date for issue of TDS Certificate for tax deducted"
    },
    {
      "date": "15 October 2021",
      "description": "Quarterly statement in respect of foreign remittances (to be furnished by authorized dealers) in Form No. 15CC for quarter ending September, 2021",
      "title": "Quarterly statement in respect of foreign remittances (to be furnished"
    },
    {
      "date": "15 October 2021",
      "description": "Quarterly statement of TCS deposited for the quarter ending September 30, 2021",
      "title": "Quarterly statement of TCS deposited for the quarter ending September"
    },
    {
      "date": "15 October 2021",
      "description": "Upload declarations received from recipients in Form No. 15G/15H during the quarter ending September, 2021",
      "title": "Upload declarations received from recipients in Form No. 15G/15H during"
    },
    {
      "date": "15 October 2021",
      "description": "The due date for uploading declarations has been further extended from October15, 2021 to December31, 2021 vide Circular no. 16/2021, dated 29-08-2021",
      "title": "The due date for uploading declarations has been further extended"
    },
    {
      "date": "30 October 2021",
      "description": "Due date for furnishing of challan-cum-statement in respect of tax deducted under section 194-IA in the month of September, 2021",
      "title": "Due date for furnishing of challan-cum-statement in respect of tax"
    },
    {
      "date": "30 October 2021",
      "description": "Due date for furnishing of challan-cum-statement in respect of tax deducted under section 194-IB in the month of September, 2021",
      "title": "Due date for furnishing of challan-cum-statement in respect of tax"
    },
  ]


    
let list = document.getElementById("deadlines");

data.forEach((item) => {
  let desc = document.createElement("p");
  let title = document.createElement("strong");
  let list = document.getElementById("deadlines");
  desc.appendChild(title);
  content= "<u>"+item.date+"</u>"+"<br>"+item.description;
  desc.innerHTML=content;
  list.appendChild(desc);
});