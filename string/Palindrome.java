package com.questions.strings;


/**
 * Created by matthewgoo on 1/22/17.
 */
public class Palindrome {
    public static void main(String[] args) {
        Palindrome p = new Palindrome();
        int x = p.isPalindrome("A mana plan, a canal: Paama");
        System.out.println(x);
    }
    public int isPalindrome(String a) {
        a = a.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        char[] chars = a.toCharArray();
        int begin = 0;
        int end = chars.length - 1;

        while(begin < end) {
            if(chars[begin] != chars[end]) {
                return 0;
            }
            begin++;
            end--;
        }
        return 1;
    }
}
