document.getElementById('Submit').onclick =  function() {
        var Height = document.getElementById('Height').value;
        var Weight = document.getElementById('Weight').value;
        var BMI = Weight / (Height ** 2);
        let roundedBMI = Math.round(BMI * 100) / 100;
        document.getElementById('BMI').textContent = `Your BMI value is : ${roundedBMI}`;
        if(BMI < 18.5 ){
            document.getElementById('class').textContent = `You Are Underweight`;
            document.getElementById('class').style.color = `grey`
        }
        if(BMI >= 18.5 && BMI<= 24.9){
            document.getElementById('class').textContent = `You Are Normal`;
            document.getElementById('class').style.color = `green`
        }
        if(BMI >= 25.0 && BMI<=29.0){
            document.getElementById('class').textContent = `You Are Overweight`;
            document.getElementById('class').style.color = `orange`
        }
        if(BMI >= 30.0 && BMI<=40.0){
            document.getElementById('class').textContent = `You Are Obese`;
            document.getElementById('class').style.color = `red`
        }
        if(BMI >40.0){
            document.getElementById('class').textContent = `You Are Extreme Obese`;
            document.getElementById('class').style.color = `red`
        }
    }; 