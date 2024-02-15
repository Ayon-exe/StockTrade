#isHappyNumber() will determine whether a number is happy or not    
def isHappyNumber(num):    
    rem = sum = 0;    
        
    #Calculates the sum of squares of digits    
    while(num > 0):    
        rem = num%10;    
        sum = sum + (rem*rem);    
        num = num//10;    
    return sum;    
        
input_text = document.querySelector("#english")
num = input_text.value    
result = num;    
     
while(result != 1 and result != 4):    
    result = isHappyNumber(result);    
     
#Happy number always ends with 1    
if(result == 1):    
    r=(str(num) + " is a happy number");    
#Unhappy number ends in a cycle of repeating numbers which contain 4    
elif(result == 4):    
    r=(str(num) + " is not a happy number");
    
output_div = document.querySelector("#output")
output_div.innerText = r
