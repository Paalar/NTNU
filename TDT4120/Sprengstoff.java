import java.io.*;
import java.util.*;

public class Sprengstoff {

    private static int search(Record record) {
        int highestNum = 0;
        while (record != null) {
          if (record.value > highestNum) {
            highestNum = record.value;
          }
          record = record.next;
        }
        return highestNum;
    }

    public static void main(String args[]) {
        BufferedReader in;
        if (args.length > 0) {
            try {
              in = new BufferedReader(new FileReader(args[0]));
            }
            catch (FileNotFoundException e) {
                System.out.println("Couldn't open file " + args[0]);
                return;
            }
        }
        else {
            in = new BufferedReader(new InputStreamReader(System.in));
        }
        try {
            Record first = null, last = null, prev_last = null;
            String line = in.readLine();
            while (line != null) {
                prev_last = last;
                int i = Integer.parseInt(line);
                last = new Record(i);
                if(first == null) {
                    first = last;
                }
                else {
                    prev_last.next = last;
                }
                line = in.readLine();
            }
            System.out.println(search(first));
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }
}

class Record {
    int value;
    Record next;
    public Record(int value) { this.value = value; }
}
