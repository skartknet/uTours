﻿namespace Umbraco.Community.uTours.Web.Extensions
{
    public static class IntegerExtensions
    {
        public static int IfZero(this int value, int defaultValue)
        {
            return value == 0 ? defaultValue : value;
        }
    }
}
