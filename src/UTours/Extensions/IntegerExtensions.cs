namespace Umbraco.Community.UTours.Extensions
{
    public static class IntegerExtensions
    {
        public static int IfZero(this int value, int defaultValue)
        {
            return value == 0 ? defaultValue : value;
        }
    }
}
