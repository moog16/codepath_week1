package com.questions.strings;

/**
 * Created by matthewgoo on 1/22/17.
 */
public class ReverseWords {

    public static void main(String[] args) {
        ReverseWords reverseWords = new ReverseWords();
        String str = reverseWords.reverseWords("hello My name is Matt ");
        System.out.println(str);
    }

    public String reverseWords(String a) {
        String[] words = a.split(" ");
        StringBuffer reversedSentence= new StringBuffer();
        for(int i = words.length-1; i>=0; i--) {
            String word = words[i].trim();
            if(!(word == "" || word.length() == 0)) {
                if(i == 0) {
                    reversedSentence.append(word);
                } else {
                    reversedSentence.append(word + " ");
                }
            }

        }
        return reversedSentence.toString().trim();
    }
}
