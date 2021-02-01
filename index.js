








function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }


function fillData()

{
    document.querySelector('.date').innerText=document.getElementById('input-date').value

    document.querySelector('.km').innerText=document.getElementById('input-km').value
    document.querySelector('.czasTrwania').innerText=document.getElementById('input-time').value
    document.querySelector('.kroki').innerText=document.getElementById('input-steps').value
    document.querySelector('.kcal').innerText=document.getElementById('input-kcal').value
   
    createChart( document.getElementById('input-count').value);
}


function createChart(count)
{
    $('#map').remove(); // this is my <canvas> element
    $('.map').append('<canvas id="map"><canvas>');
    ctx = document.getElementById('map').getContext('2d');

    count = count

    preLabels = []
    preBackgroundColoros=[]
    preBorderColoros=[]
    preData=[]
    for(i=0;i<count;i++)
    {
        if(i>11)
        {
            hours = Math.floor(i/12)
            preLabels[i]='0'+hours+':'+(i-hours*12)*5+':00'
        }
        else
        {
            preLabels[i]='00:'+i*5+':00'
        }
        if(i==1)
        {
            preLabels[i]='00:0'+i*5+':00'
        }
        if(i==13)
        {
            hours = Math.floor(i/12)
            preLabels[i]='0'+hours+':0'+(i-hours*12)*5+':00'
        }
        
        preBackgroundColoros[i]='#fa9607'
        preBorderColoros[i]='white'
    
    
    
        preData[i]=getRandomInt(90,140);
    }
    
    
    
        myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: preLabels,
            datasets: [{
                label: 'Your average pulse',
                data: preData,
                backgroundColor: preBackgroundColoros,
                borderColor: preBorderColoros,
                borderWidth: 1
            }]
        },
        options: {
            legend: {
                labels: {
                    fontColor: "white",
                    fontSize: 18
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false,
                        fontColor: "white",
                        fontSize: 7,
                        stepSize: 10
                            
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontColor: "white",
                        fontSize: 8,
                        stepSize: 1,
                        beginAtZero: true
                    }
                }]
            }
        }
    });

}
createChart(25)
