package top.song001.Password.test;

import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class TestSHA256 {
    private static String byte2Hex(byte[] bytes){
        StringBuffer stringBuffer = new StringBuffer();
        String temp = null;
        for (int i=0;i<bytes.length;i++) {
        temp = Integer.toHexString(bytes[i] & 0xFF);
            if (temp.length()==1) {
                //1得到一位的进行补0操作
                stringBuffer.append("0");
            }
            stringBuffer.append(temp);
        }
        return stringBuffer.toString();
    }

    public static String getSHA256StrJava(String str){
        MessageDigest messageDigest;
        String encodeStr = "";
        try {
            messageDigest = MessageDigest.getInstance("SHA-256");
            messageDigest.update(str.getBytes("UTF-8"));
            encodeStr = byte2Hex(messageDigest.digest());
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        return encodeStr;
    }

    public static void main(String[] args) {
        String str = getSHA256StrJava("123456");
        System.out.println(str);
        System.out.println(str.equals("8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92"));
    }
}
