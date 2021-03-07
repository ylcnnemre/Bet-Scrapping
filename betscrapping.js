const cheerio=require("cheerio");
const { get } = require("request-promise");
const rp=require("request-promise")
var url="https://www.mackolik.com/iddaa"


function getMatchRate()
{
  var match=rp(url).then((response)=>{
        var list=[];
         var $=cheerio.load(response)
          /* var dat=$(".widget-iddaa-events__row widget-iddaa-events__row--markets-summary")
          .children(".widget-iddaa-events__cell--body widget-iddaa-events__cell--basic-info")
          .first().
     */
          $(".widget-iddaa-events__row--markets-summary").each((index,data)=>{
            var home,ms1,ms0,ms2,alt,ust,c10,c12,c02;
            var away;
            $(data).children(".widget-iddaa-events__cell--basic-info").each((iter,data2)=>{
          
                $(data2).children(".widget-iddaa-events__template").each((iter1,data3)=>{

                    $(data3).children(".widget-iddaa-events__brief-details").each((iter2,data4)=>{

                        $(data4).children(".widget-iddaa-events__row").each((iter3,data5)=>{
                            
                            if(iter3==0)
                            {
                                home=$(data5).first().text();
                            }
                            else{
                                
                                    away = $(data5).first().text()
                                
                            } 
                        })
                    })
                })
            })
           
            $(data).children(".widget-iddaa-events__cell--football-win-draw-win").each((iter4,data6)=>{

                if(iter4==0)
                {
                  ms1= $(data6).text()
                }
                else if(iter4==1)
                {
                    ms0=$(data6).text()
                }
                else{
                    ms2=$(data6).text()
                }
            })


            $(data).children(".widget-iddaa-events__cell--football-double-chance").each((iter5,data7)=>{

                if(iter5==0)
                {
                    console.log($(data7).text())
                    c10=$(data7).text();
                }
                else if(iter5==1)
                {
                    c12=$(data7).text();
                }
                else{
                    c02=$(data7).text();
                }
            })

            $(data).children(".widget-iddaa-events__cell--football-total-goals-over-under").each((iter6,data8)=>{

                if(iter6==0)
                {
                    alt=$(data8).text();
                }
                else
                {
                    ust=$(data8).text();
                }
               
            })

            list.push({
                home : home,
                away : away,
                ms1:ms1,
                ms0:ms0,
                ms2:ms2,
                c10:c10,
                c12:c12,
                c02:c02,
                alt:alt,
                ust:ust
            })

          })
            
    
          return list;
         
          
    })
    return match
}



module.exports={
    getMatchRate: getMatchRate

}

