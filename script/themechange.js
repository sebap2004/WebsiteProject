function changeTheme()
{
    if (theme === "1")
    {
        pagetheme.classList.add("theme1");
        pagetheme.classList.remove("theme2");
        pagetheme.classList.remove("theme3");
    }
    else if (theme === "2")
    {
        pagetheme.classList.remove("theme1");
        pagetheme.classList.add("theme2");
        pagetheme.classList.remove("theme3");
    }
    else if (theme === "3")
    {
        pagetheme.classList.remove("theme1");
        pagetheme.classList.remove("theme2");
        pagetheme.classList.add("theme3");
    }
    else
    {
        pagetheme.classList.remove("theme1");
        pagetheme.classList.remove("theme2");
        pagetheme.classList.remove("theme3");
    }
}