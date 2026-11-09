public class question_2469{
    public static void main(String[] args) {
        String str="fsf54sf578";
        String str1="";
        for(int i=0;i<str.length();i++){
            char ch=str.charAt(i);
            if((ch>='a' && ch<='z')||(ch>='A') && ch<='Z'){
                str1+=ch;
            }
        }
        System.out.println(str1);
    }
}