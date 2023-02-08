using System;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
           string f1, f2, f3;

        f1 = "Niki";
        f2 = "Omar";
        f3 = "Steven";

        GetFriend(f1);
        GetFriend(f2);
        GetFriend(f3);
        
        }
        public static void GetFriend(string FriendName)
        {
            System.Console.WriteLine("Hi "+ FriendName + " My friend");
            
        }
    }
}