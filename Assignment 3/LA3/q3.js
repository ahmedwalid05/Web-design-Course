let branches = [
        {branch: 'Doha',sales:220},
        {branch: 'Khore',sales:123},
         {branch: 'Wakra',sales:90},
        {branch: 'Lusail',sales:87},
        {branch: 'Pearl',sales:120},
      ];
  /*  1 */
   
  min = branches.reduce((min, obj) => (obj.sales < min.sales)?obj:min).sales
  
  console.log(min)
  
  /*2*/

  highSales = branches.filter((branch) => (branch.sales>=100)?branch.branch:NaN );
  console.log(highSales)



  /*3 */
 
  output = {'HIGH' :branches.filter((branch) => branch.sales>100).length, 'LOW': branches.filter((branch) => branch.sales<100).length}
  console.log(output)

