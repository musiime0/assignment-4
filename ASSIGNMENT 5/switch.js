
    function goto(level,button){
        var arr = [0, 1, 2, 3];
        var result = 0
    
        for(var i = 0; i < arr.length; i++){
            for(var j = 0; j < arr.length; j++){
                if(level === arr[i] && button === arr[j]){
                    if(level < button){
                        result = level + button;
                    }else{
                        result = button - level;
                    }
                }
            }
        }
    
        return result;
    } 
    
    #include<iostream>
using namespace std;
int main()
{
    int a;
    cout<<"Enter Floor No : ";
    cin>>a;
    switch(a)
    {
        case 1:
            cout<<"\nFirst Floor";
            break;
        case 2:
            cout<<"\nSecond Floor";
            break;
        case 3:
            cout<<"\nThird Floor";
            break;
        default:
            cout<<"Invalid No";
            break;
    }
    return 0;
}