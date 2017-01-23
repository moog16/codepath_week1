package com.questions.strings;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;

/**
 * Created by matthewgoo on 1/22/17.
 */
public class MatrixZeroes {
    public static void main(String[] args) {
        MatrixZeroes m = new MatrixZeroes();
        ArrayList<ArrayList<Integer>> outer = new ArrayList<ArrayList<Integer>>();
        ArrayList<Integer> inner = new ArrayList<Integer>();
        ArrayList<Integer> inner1 = new ArrayList<Integer>();

        inner.add(100);
        inner.add(200);
        inner.add(200);
        outer.add(inner);
        inner = new ArrayList<Integer>(inner);
        outer.add(inner);
        inner1.add(0);
        inner1.add(100);
        inner1.add(100);
        outer.add(inner1);

        m.setZeroes(outer);
        System.out.println(outer);
    }

    public void setZeroes(ArrayList<ArrayList<Integer>> a) {

        // find zero places
        HashSet<Integer> rowPlaces = new HashSet<Integer>();
        HashSet<Integer> columnPlaces = new HashSet<Integer>();
        for(int i=0; i<a.size(); i++) {
            for(int j=0; j<a.get(i).size(); j++) {
                if(a.get(i).get(j) == 0) {
                    rowPlaces.add(i);
                    columnPlaces.add(j);
                }
            }
        }

        Iterator<Integer> rowIter = rowPlaces.iterator();
        while (rowIter.hasNext()) {
            Integer ri = rowIter.next();
            ArrayList<Integer> row = a.get(ri);
            for(int i=0; i<row.size(); i++) {
                row.set(i, 0);
            }
        }
        Iterator<Integer> colIter = columnPlaces.iterator();
        while (colIter.hasNext()) {
            Integer ci = colIter.next();
            for(int i=0; i<a.size(); i++) {
                a.get(i).set(ci, 0);
            }
        }
    }
}
