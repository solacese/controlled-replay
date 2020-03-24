import * as React from "react";

export function SvgSolaceGreen(props) {
  return (
    <svg viewBox="0 0 180 50" {...props}>
      <image
        width={180.556}
        height={50}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAABICAYAAAAQ5YupAAAAAXNSR0IArs4c6QAAAVlpVFh0WE1M OmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6 eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3 LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlv biByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNv bS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0 aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4K TMInWQAAJPlJREFUeAHtXQmYVMW1PnW7e3Zkm8G4gTFuUSJKUGaGARkiuERj1IgvJmo0JkQYEHdj jG8wURM1LrNgMPFTnzF5EmPcQjBqBllmEVwJGlHzEDWKbMLAbN196/3n3u6ZXu5St6d7YL7cmq/n 3lt16lTVqapTp05VnSLynU8BnwI+BXwK+BTwKeBTwKeATwGfAj4FfAr4FPAp4FPAp4BPAZ8CPgU8 UEB4gPVB7SjQ0jCeAlRCUpd2II7+Ueqmz+kNOm1etyOcH+hTIMcUCOYY/38Geo0WU0nxlyiqZ1be 3d3baKg+HpE/yAyBH8unQHYo4DOEbNBRartoVxeRniFDkHIXhUSGkbNRAB+HTwGTAppPiCxQoHz2 saRHa0jQevyiWcDoo/ApsEco4DOEbJG9vKaRJs45giQtICkj2ULr4/EpMJAU8BlCtqkd3tlgSArZ xuvj8ykwABTwGUK2iTz5x9uB8tNso/Xx+RQYCAr4DCEnVBa+HiEndPWR5poCPkPINYV9/D4FBhEF fIYwiCrLz6pPgVxTwGcIuaawj9+nwCCigM8QBlFl+Vn1KZBrCvgMIdcU9vH7FBhEFPAZwiCqLD+r PgVyTQGfIeSawj5+nwKDiAI+QxhEleVn1adAringM4RcU9jH71NgEFHAZwiDqLL8rPoUyDUF+m8P YfG5ARozeSxFxdFE4lD8JAXlFgrTOhq2pZWOru1xLMTyuhMoL1BMm3atoTOva3eE9Rq4HJaMQuIY 0uWBpCFf7HQpSEP+RGA1lc9+xSvKQQXf3HgoRXsOpEAeTmHKMoMGUgaI5HskxUcw6PI2TZm3ea8q U0v9VJwY/RIJsZ/RluKZk7SDItGXkd+X414D8lzZcDQFaQzpNA550nBwbRcJfS3Jneuo/CebBiQP A5iId4YQZwC6diKI819UkF9BQbSxKLbvxy2ICVhmK4TwETiYqKXxY8A1o5L/BIK+R9TzEZXPNwnJ pscK89poaAnXfSXK3ZJx2ZtqC6ig9CikNYVIO5sKQpMpgDyw0ZJ4vuLIOX8c9vpviLrCKwDwBNJf SdHwOqq8sjMONmieslajl0eOQaGOghm3k9DZT6JQYCxoi3opMGkgE6y7aSi7Bhrw06BBdxvq51XQ 6u+Iv5Z2vr+BTqvPvTm3VfeNomBkLEntTDCpGVRceCTykZ5froh4na19gKizexna22MUECtow6h/ 0syZ2Tk70lQbpJJ9j6SwPpE0ughtaRLypBltKG4Ni/Nh0K+YqK3xA7StJUbb7g6/QtVXfD5o2oxN RlE6D27NoqEUjixC5U2n/NAIcOx4Z+NqtMIl4Ys/NLwAgnui7fj6N2A/M+CFPALULaOifKL23ROp MkPu39o4A/gW4AduHhhiyQQQaOniHSMS2Y0igPPTHVQx5wlLWFXP1sa/AXS6KjhG742gTxWdMOdD 5ThxwJd/dRBF82/D52R08tFGY2UGaDIAu3qJxzafTANu6BxHl5/A8z2MgnfRX7c+TbW12bfktPKX QyhYMh/pXIDfIWDOAYNpJzItM2fW/zm/zNDDkW3I+N8pKq+mSTUfWAMr+rYuLAcBfobfeAoGRyS0 IXsaGswBeYnqbP8Cg528lcprHlFMca8EQ2kU3YqFwykk30BFoAFatBEBQ6GSYEeMEo2DhEAkDFEC T0uGYSZeDJBMGEJTYwkV0i3oBPOMCkRiKemAIcke+P4ToyZETR3invgqYI5HdpBoUp7MuNzQotH7 qVNcRdVzdpkZ9Ph/IBgCS0T5I+ZSSdHt1IlZmTR6k1mfbLVJUgc8wWC0txEGURcm2jQqR+fZB6Xm snOd2DuWLjq6V5HsOQ9S08f2gB5DVt19LGmhpygUHI0BJbW+GFkH8vov1Ofv8B7G+2SUYzqqCkNy mjMHHB6xw9EzqLLmL4BgnOqOpYKCsu+CJg8gEhCltiGJxi4+gxHdN9GylwLuDMAcg+cwQAYSEsJU GaNeJPpHNKBLqXzezoSwQfOqxhBWNR6Loj8LZnAAmIFVJb6CDnczRdubqCpBD7DqjlEUKJoCapwN Ap4FAnJDTHeZMITmeyspEGzAlOU4iJDpOHkU0eVyjHRX0cS5a5IAVtx9CIXy/hsVeKEh5SQF4qMQ EktX92sUjdRQ5eXNqcGu37lmCC2NX0bT/S3l51VSV09qfXwKsf9WCnX/gSZcvSUtr8vv3g9lPxmM EiM09CvJTDERHM0dRNTBRCVdTOVzHk8M9Pz+3B3FtE/hDWAEN8RG39R8c06WUlS7gSovey0Jf1vd OIgET8FvjNFdkwLjH0bHvQX5vCnu4/p8ufEgMMt7qbjoLNplNVPEYELi57Sx7NakaYlZlp+CWV2N NBKZAlEBGGlXz9uon/Mh8b3umoe9DMCdIayrzaPdZS1QqrBVYItKFO+j502kiTVbbcvGfHzVwioK 6E+CiCPS4LwyhJV1k9GZnwGeoZZ5YmZA8lVUCEsD9q61Hkwu+HULiSdeTlZknUFV81bYI7EIySVD WNFwOBSlzaDoSNRGPJ9mJgRLaOJbNHE2j5TOrq1hJGAhPVCZA6CJn6Wm7p5pVHV5kwOsc1Bb459R 9980pgZW7UjS22AWU2jCrHQmxphbG+ZQINBgUVcc2pfPSPQHVFHzW/Z0dC/csy+VBF8FDfYHXDId OSJPB/To3VQ+9yrQmsNTnaCWht8B7vyUgDiuDzH1qEZ50D8Gj2MRydm1l/4Eo7A1M8iDTjKsz3Nk BoydCVo1ewXE1ZPxxXPUzN2qe44HM/g7KoKZAbt0pqbrPdQtv20GO/zv1q9AA2u3gDBxchrBQBM1 13/FAmbgvd6ty6d8DTocgxlw+slll7DUFO1qUcoYM3Bdv8gY0ewjmPh5ihgKPkss8Xl1nOfWhsch zTAziHes5Hwzw9Gi19gyA05To7WYylkN4xwazyeGHnEbNd93AHvaunWYapaE/klawJoZcEQpdyC9 RUbbtUYkMUhyXaQ6My88tY6Enyae1g4i58wQeNlKaDdhLslFSq5EHoXDkdepqmaJcnmrILr3hE8B JszllWP1AbbVT6BA6AVUejA2Z+4LS3yT4kX65CV3zty0nWGWJ0ZNeud5uSYC0FE8R633sHi9Z91m cQ7E+KkOmUCHDUE/ougq5v4VU6P/M1YcnKOwLFJEwcIrncFSQnlFaqt2L9rQORZTGxPY0NnIVTRx nrNUo6MeUPEpKaR+QoEtSjFNPC01oPebFeM7Mf0VYhgYYnw07w02Xsxk1lLV/HeSA1K+JtVgSoq2 bOV4ap0XOooKZf+mWla4c+jnzBACVIuOZ508K3J08j5HmjL/TUgK3wSxrPHa+a5ZVITlqV8heJ9Y nuwbh0ZP0cw/Ru1Q9fqbGvSm3u/0F8yhjfLvh452B7Eib086TfslRTBa2zmBTqtpDyOfXpaTnwKT scMY9zdpLelMev4XccksHmb/PGDKiVB6zooxb+v6yud2ELnZHonHEE5FUJVtrEj4YsoPnujYhkLM e+TTtjgSA6RotaGfoJ4IGo/4GrXVn5sYZW9+t28JvKoge/UG6WUwGcWY9AAFn4otTdQd9sY59fCV WOpkBaXRQ51TkU3O4QmhUgkW6tC8GVRYemFCzIF9XYOOWFxwYKxzWafN43hecF8qGPW8NYCFr66/ ZixVWgSleYVCR1JhwRfS/K08Vt5zBAW1F2LKOmtmwPE6u3dQMF+9vqzSSvQzW8fBiV697y33HQxp 5W501F4vy5cQ+Gmka7FlWKqnpKcxnUr1jX9zuSHNih8RT50GgbNnCCGCBpYORBmsK5PnlQWhauKK 9+pErY6FMewKwrKSimu5+2DSgj8DE1GBJug01qsBAmqfLf9Qgu3qASXEInqp/otK8NkG6hlyWqwh W9eHmZ45KmlyKq3GDlAVpwXXuUviBiJedcBcXpvkipYllGBwIdoP59WegXOojilb+yf2MK6JWQDw MquV0/RHY9Mj5/S4nU26+gMrFGl+Un/LlaEKbRp9qo1Ji7sXelgTzsiosV49xDHPzGkDoUcA49RI rVFMmvM3BHxqHZjiq+U9mrA8aJ+WKfq2pcR2/uSt1XbzwL6YsTTxyNdu7/MewDchsJ6l5EydeDT4 NSVoZsr2FE1Egd0NGAREABt4XFzBSIjsvH/AcA7YjSDs8Kt1GbINPLwnwX0aaKaWvqW4pWEipn8n oAzMDOzzxLqxaFR9Ktzdsc7YdGeW1eq/NCSIPLrEKnBv87NnCBIbd9zm+ax0E9jk07rwYWqt28dz 4fTojS5abmxmxvZmKccCtzNX58RZr0FYvvLqdGqzmQcmYzI3/1TT6oXepaJkTBl8yW0OzTgdn5Tu nSc9lrMPbwPX6HBnIIQKuhr0dFcS8Q1XUn/XFR8D6N1voR24n7vg/i60J9NwCjoHDAXKARcqchuS 5KxMTERefe2nLhKWgPIdOMX3E6Ptre/2DMHYcOjaB01OK7AFVcOOuFV1X/JU0Mp5/4NddrdTe9cv MGn72CbuVKw/M7Ox5+rxiMzdZUY3KK/E8mIci9NToKGPxChzohNQTsJCm18EHdRRu0s96rjikNwc JLTzTq71FqzvF1vt7bCIJbF8pW+wCEj3qrySGeJSV/Gc6F9oS8kKQVZIE1Xi596GzJTtljfT86Xi w/q2grzSjKbXKvizCGOrDQHtIoaIqJKYMXJq+0N0eg8j+l14/i9tWPaqkqa/Ys51LknMjGn6XcAQ bCwXCbVpSBI23pGm6Exl6tmAvl8xRnbAJtR2UGvj42Bc30qYPtnh3oXViPRR0g46m/5i6LXKuh5u YxKLgKrug82X08Gl+6OeT0a8ZCWduV37dUgwZ9EJKduGI52Y+oYmKiVjrJ6FVyrBxoHaOz4AqxmD PNk7PvwXCmEq5UH6iGNbg92l3YHxGBB4PwxP2b6IcpZC/8Ip8rIntubrqzFYvUIRbS12etoNrgB1 dvYMQQS2gSFwZalMBTBvjVEjGLgS67uX0OipLdRWPp8mXrXeOQsOoU/hEExxwcTYPggHwFgQV2YA Sh6vTkZfVZoyMF4WSfOx9XdPuM7Oy6igcAwan/1eA9ajRPTzqWruv/dEFrE0/D1DRFZLPIx9KeoM fCb0PU2151DhcOgnApBKxTizU8gNaH9/oEjH35K2zsfzIEMn4ABdECsa3EgVpATNvl/EcSY++UyD G1Y+tqHTsYnRXN/XLApRJHIrhPVvIYUDjGkY9zMuhbkcbpZGiCNIBM9Efw2Tpn+GgeMR2ha9jU5L YYyuCfKSiJ3Li3xCPRoqS6gwhD4s5sGnoeDip1LJ8FNxRHQRBVCooWITHTYPIqIHt28xKt6ji9po mJ3QCK1LqZ3EcXCna6k/lXhjz0C6apxNaLrzNCoq5HQPRSfALjhs0jKbCMpAW7F6Mx+nNXlb98A7 48yBLHYcKRNzxerPYJE3XYepgGwCGv6pOT4SzyO0UiWjt2kyaOzlOHCE2hxtK9gBd1Inx5ughKx2 AukNq63VaEZpNc7SPAGJcJ9eidDsW71gxgunawzGRgZYb7M/jr5fTyNoNr1876m0ZHurlxOr9gxh PAxntDa+gQTclUhGzpL+mRJDeydrWGeBw11EWyV2+zU8SME3l9CE+9XWDyU4Y9hbe0nKRa4++Ni3 BpsDRAPLELg8zBT4tOaq+8ZSUB+PkQKn7nCSkTBKRvQ2mjLHXfHGeNqwfCpx3p/k6a7r8gyv5Nge A8ayvc99VXn6y3VL9AMqLDsJbdZt3I+XdET8xeHJuEK0GGeDWNJxcjNKf472dS34VwDMgHu6aj4Y K5SYiCMwkIu8VXRK6W10Qt0CSAtKg7E9Q2DUkWg99hqc67g7juHsHWtYuUAFyOeZeEKsOfZZWnPn xZYn8VLxCHGwcTIu1d/u2xCXdzETy61jTi3FcblNxAX7pMt4/4TaHoo4KhZBo+HTSRc3ouMeA29u aAF0Fq+NLo4x+SklaGJILMn+e/wLB+qMAVQhI8Z5C0xFCBaSPPVDIwWXjgvajB6BvkD2DKGlEYaE oAfhxM1VLReclmUy40bB0ILBH9PIKDODBZaQKZ4OqwyA5FN+EX2h8vw6BXnsM7FAvLnldIoW/hsH hi6nprudNdaCKpQ5OyfGKZnXsceSVnxsly3YVacIDDBefhPGUqh6nD0ByaNR672HQTI7E5arHsN8 dDcVFj4Bpe94ZIdH8vhonlhHmeYUjZCGZxo5p/H2KYSuIT7pdk0pU1ooxMN0Sg+Mss1BS+MVaMNn J4Qr4EyATn4147KEUVJUizawIDnY+stZQuA4nZuvwpbdwyCCTFfmstZpsS8bkGBeHYLG9B4q0L5D q++7hI43Rrv0WKb9hOyMXunY+3xYnHrrwb5vtzfeIkyizA1sj4a31l+Mec0FyMPhqLsDIIKajKyj y6SnhiUZXa6DqLMVS3lTepVUmWZ6zQ+DFJYQnc12mCmanMQz595qGeOVKil5b8Qy/OIMM0vZEu3Q 2vGqQLpjW5KauMvUB2SViILaO7i93kDNjS1UOWdpeuJ9Pu4Mobq2i9bcfRFFYPuQsJ25/86smPim Jj36F1p572Sctd9og1qtIm0i58h778vT4sUBOuzjIdQTvBiM4JdQRoV69S+GZpr5gMHSWXx8Ha+X wZjI61gmvhRi5RRo+/tHqlcQfVzMkK0qJpy8IC18AMC3q0bJOZwx7YyshCm0H+Y8rcQEtMAfY8wg 0Tdb72zIMAhl6c9oSV2Tkz5BTU6ecMUnlKeXozn9GQ0J8nJWnNmpAjClFQw+Q3yYynfeKcB7RV9u rKTRny2k7ry3sCyJUQYSGCuWkhybkpMPYxWiAoygoteajzR27yVBDtwHtPmhoLdVrFxnztDYi8Ny nUwS/pb6H6FuWDGZUmdJUP37YMyF+RNohDjdCZEaQ2AM47Gu3bV5JjJ+kxNCz2Gs1Q1ox1BI/4Pn uP/pEVYvPATMAFZ/RRNEQh7R9outtTNlEqWYnSQjU+i5Ld+nSXuVWa8Q2tO+e1U1GqoGeciA5YmP 1AuNlYjcFxPrLNtZkMaGMYFpiYNTZwiMhNeAK+begjVdGE6BaXXDZJcDdtUgU8s9HWv7U5Oi5GL7 bVICsY8lGR1N3WGFakD8WBnb3DgLdiXexfz/FHQqXn+Ou75GxW8C1oB1+ipVzG/zsh4dR5bTp6bl IW9H5zQNRu523DkxAzyVHVqyf6JXTt8DI7CLUpbnNA0TOeuMIDuGRtNLUDTbOG8MIY5k0rz36YQy bPbAGrYk3gTTX1EHTZdttYsfpBj3UN9ByHljcS8TM1/DtWM9rWbwPFPQmjg5BvTJBlYL8v5KBcFf I10tlu8+JhDPDPtI+TnJaDUUSe/FvXP2nHU/b0P2pgvgViPEUcT6j1y6cOQdQ6mqlgYfIYcdLcXj 42o47aHyAsdRUQFPm/rbh+zT6AthpT42AQRsDbZkxhA4AYHLMSprXsSuuG/AruI0VOxG+CK1fhRM YG2/cAQfRDFdlF5QPHQUgwdNtYKj4tHVn7LQU675IJQulqnjzxLk8royMKLn8Ct3HfVYWx6V58Ac +EdZSt0NDWszPDIEow8cRyWfuiu33VJ3Cheigzm4suNOE9JmKMP3C1CvNjqppwz2I0Fzy4nt1vfM GUJinibPXQZLv7juyjCiuhi0t15aSYxj9a6JL+Myl+LeIF1f0889EL2osvpi3FTV+UJWcbohY9Pf edrzUMIdBFD30UTHTVQ9Jc1uaLMaLnF9nzkoqKMtyj+ShonD1SNkAKnTXzztM4lAQtBE4n6ADBJV jCJxUZF7bSoiUwLjRXNsebd29gyBDZq2Nl6FZal51HwXLw25O5YYgsELcHbhaDCFxWi3XlYk2EwZ TlcEuMGbriDvBero8oIjHjO3z92dOv27dXVuE0nBPrTo19i7MS6289N9uJPiOaq+uCsFS24/hfYa NmyhNyk7aSyNClyKk1MnYWHZvqmnJc1dRtLB9BLubci1E5I3TeU6lUT83HaGYWrOOybTnD2VdDoZ Jw3vxIgEq7n5p6XFtPOYMCtME7CnYOKc8ygiJwLsbTAG+62afXhiBk3Fob1ejEvTYNnWvf0bcViH IOV+vfGVX7STYodf3GPwBh8NVntVjLi6Y1ODaMNdDESneNpirOvL1ZBnEap89ptY8bAya2+XiLm1 vbjgInqmtm+qaAedqb8OyYrbhrrjBldCebJCPUrGkDgapdi+M04iNaLciQUCy8HCniHwWXW2Lcfz KQHC8Aksr47Nri/djMs86RrlqBof1Elw0cjvlSvT4LSBLyfEVn3F8pciKM/BdPlHRejsgOlgBhrM i3uZZ0bD72YncY9YpLwfhl69RBLGzVtlo273EskTrMzrRFt+01McgesHhTg3KwrP2lqcnryT6y/d SW39wDMEe1N0qp38BDplhO28I72UCT5s6ryipg4dbgGsJicEWLyy9l4PrEgKCQYhISiYzuJI3Fm1 DHZTBgRs7YHxqbmPSA83qYFmCUrgIlevLpjBMXCvaVjBb3/nZtiLsAqx92NmLPUzsKciNyJ61fdx HR0MiHhxLFGEYIxm/0393ycxo/REHFlfj/Mk30vLgtCbB1RPZkojvK/U0qkxhGDgaNxyM9YSg6pn xZxa6ul531HZy3c0BvXknnn87HcwMD6jtGxk7llnqzLeXFQ/xGAmbrF4ukDy+axefuqWphGOaRR3 Gi8umOd8cMwLLi+wfI18++77PTfyPKyP63KBl6QsYdcsKoXe6yLik519DtTTsIHLo36DaR4Qj/ah yeCtrX4aBqkn0IaHo+0/CL1cdRKWznBrbJUhyTtnH9yGo9GVdvhVGIJxlAfLbL+wQ6Lsr+MCFd5u YOd4VWG3xQpFB12ODuHeJUzlzDF26G39Ba5RN4+a2oIYjEyX7bR0y6X2QDkLKQMj8oY8KipdI/A0 MECwV+FFD+iKFQBaIxrd5yqQvTBsiDQQuBin8n7c6+f1hcsTgT3FYOAhCocfS4peMecJ1OG/PIjn 5kG8YGAqNoHdnIRL9aO1/ruwIPUM2jz2GTBPksto47LlSdFD+2yFYvUfSX65/NChz5tkf0uWQ+/s zRWb38YKQGgyRJ7zen0zeRG02nGkx/WZllew87XsUschHKX9KyFPxl6X917RBtbp4AwtdfRbe2i3 X7JexSGbvUGCZtKiHyaOkr1BxgvvGjil7DdQGh+Hkdkjt0lGlfbFykVCR/DqjB2r4pa0UVQFDy/L nlzGtyhVmFNHkS4p6rAixLcyqTuz7WuwH9Fcf37Kpjl7LM13FVJL3WVgBI8ACHtcQF6sp9D2ztPT lNFV32/H1XMv2iPLYgjrdqT8rRNGFYbA8bFJGdeOC7qHVjWMcULoGKZjfm/b9sC5dAnRysYt3fIQ RKsnbUKTvTXtzGQPh69gcJpDaDxIYuR5gJZueyHuMaBPKTd60SfG8jaVxh1ztWU+ebdja8OTYM6X YIMTMwNnZmiJxMUzDKmO5HrHASAdBecDJ/PkX6ll4Y12S2Np0VbB3sPQwmVI63hjCU/K16kHeqFU x8vi3eGHPU5nkCcYGgmgcxeWPUB8+7ad4wtqWhrPIC3/SSooWBgT6jj+bkSZRidfw890JyP3wNNS 658O3A+fnug2Crbf4IRBlSGYOAR9AXOqZFHMCXtqGFeYFUNgZSLhgtaKuctSo/R+s3IyjAYslG6P Pg3HPJOt8vYiSnoRaEQnJvlYfQhcKNMVuVpZOpDS2xKaBos+YdzobOvkGx5E3TiWIEaoWzHaLsad GQcannxhbWvjA+hwbwLfGcZI6oUZ8JSsIDQuaYmwueEaWlebrkWcPHs7GPh07Jb0sgzJ2cTkUORD vF4AOxwbqPW+c+IFSnsub8C9iY2wNiweRzEmmCMxltSk/BFx+lZOD1yL6cx6qyAHP56wciO9kELi bdDwWTCsuTh7M4na6iZDIp0BvzuQX6wYEA9aM4wVOi4LVN2Qlm7BCVPbeTtVXLEBeb7X4+qMQ3bt gvQGmnD9TrtQ9rcfGVoaroM4+YsUhQeMX4cECtsKTvxD+tvWdcqdpPXXh1GQ1qfgi+dtJ7XjGPT0 We4HhprrjoOCcwly/oUYB47jSHiy8khUO1YCQzfXHwmGsAqwIxIi972a1PkMaY3DceFP+wIc3owb s2kZ4qht5mJUbK0pIi+g8tm/s8Tc0jATHTgTRgwjpgFBheivrLthfS0vJZtHo7l03ND/jrxOw7t9 W0jLFBiUjN6KjP8UDGIslg2/Q5Vzf58Gxh4tjd8BA1oE9MWW4W6eReDrbFczHFmDTvMh8quhHR0E c4PjjY1srIjmKQ+f+JcwMkvyQtgyWOKI1lTs/R40RRviPuvJgabQzAUhfhsDGeIyDl6e53wmmj0z lZh1WGW7SimFlsaXUToMmkrQ6kC8siD1NygYOokmzNriFJG5nhfHzICvSC/HbznmoHe5mkFj7Gv4 ApdoU+wgTnJxjROT8ttKzIBxVc57DY2L7fK/w5+WToMZbSkfxRXu9ktGrIDStPtRsdbMgBFLQgMM T1dnBneNQON/CLRRZwacjnGjs1wI5dW3+TPNichL8Pswzd/dwzzM0t5JtBPS6i5IpabRWm4h8JSX Qql4MbrSZndUvRDofNo4yst/DOUca87XtXTxPA5eMYe19DPjn56fHTCdzgpHAQkgEDgLDO5MKOrG G21pN6w/GXvzUQKdcPKTTnJlBpyB8jlNGNCqEdfbUqSZedAUgz7f9bkb9ORfB5gSH4gymUucsYLz yrnKzIBx69FvI08bzWSy9J9zI/Vt1Nnlygw4xXjm01O3lhAS4ZgxxHYX0s8o2tFAw4o6aEc32CRc cRScvEjQDr0GHe8m+BQa/sn/+KqJO3FA6rpkb4UvViINL1qPhvAFQKcyNmY6PGZ8gjxW0WbcClW4 zcxXJ0xrj9xVQnLoM4YCytrAKI9DiBs8DBy1wzU3fJw0P3gJGuv1MQnITN81YhKAOZpHIm9BZL6e PixbQjNxgCzuWuq+h3s0H+z3NlcBq0ZS344OdaGhbWa7i6PLWMw9NZ6Up6ekF6k0+nVXE/vmqLwY uK036HhKNAmYaf0ONsPCLP4VG5JC3D6WgoGPyH8enfBYNJfUNuQW2yGcd+bCanL5nHsdgKyDVtSN g+KzGYHepp3W2Nh3C0XCVVQ1334ATYirxhB47VLnC1AEixsgXsrlLXwHJO7BoPbOjxH2CX44CitL 0UEOxc8UU+GZ4nagIm7Bick7Uvy9fbY13ACmMhd5Y8aQ6DCSgWFJPk+BvQNEnxmBwrCFWAUmVWKs niBiYiR84ciwaID4/tMkf6ePtoXvQXz9krHjzglOJUxDuxwC3rl91yzQ5v6kKC0NN4LBXYnyDk/y V/9oR9xHqWv3AuI7CeNuVcMUzMNfin8qPZlqkh6iyK55lpejWCFprv8K8n8DaHw2aIx5TH+d3IQ6 vg/b5Bf0C1Nr4+XI0xUoz5h+4eGDXZKWoV3fTJNqlmeMi+1dFIYeQtnYvAA6UMbuSdTrVXT87H+p YlDjilEooSgyjTqLTqbOToj/sgYJ4BrxWDJsj4/vYCBj3jwBz3IU5lBDrOMpRqIz5jNyLQpa0W9m wHgn1txKuyLHQlSvR77AmXudaYrakB4wxSBxgfGT2AbMp73SJQPkUzyCKcKRnpgBJyexd0L1qvre 7Nm8sOKORVCh4V+Kq6j5OfI3FXTflBLi/InFM2QSd2JExmLUmp3EDDim0XhRp3y4TM1BwoicShvL LlVmBoy3cu5a6txyAfQlLI1AsamWWBoUTxAk1dHnPUf1mxkwch7Jd7aPA87b0W77pLK0hG08zDa9 EfEvouc2z+gXM+Akqq/4HO36LChkv4l2/XkGdIJilb5BGzef54UZcNL2VdI7ZcCuFSnOg1ifviTI HF9o34V4XYUGty/ghiIj+cA6hJHj2Y0RuhOjQgcKtwPEhminP4jVhKeN8Gz/e+HWkVQ8ZC7y9DWg PgBpD0XafJNQ8ooD50vHUhAmNAiDNlpi8wjWZzO1HcBa/GhKGv0pm4igyYc3OXY2PolKdC5++6MM w1AHXE7Up8QUR3ThbTu6DcqmP05610M06RpTQnLKV/PCE6Hd/zlADgUe1KGA2MoTY8HLZazw3YQ0 nkVbqMV7/11zI5/RuAhpHAVkPJWAaJQm/WC0IZ62oSyG0nAFlGO3uCnHAJuZe/a24VQ6BHkS30Wb wCU4xuoPRGBDKcoU7oQf6wfakcBO+H8AGj9A5XP/lFmCCrFaG+aj75yPdMuQHm9yStB7sQSM+pGE y3AhMZG+GO34VwpYLUHsGQLf5KzhJp4ACr9h2fNpGypS0a2sxxVSsgyXTRaBaCON4AA3ThBNC7RT 147PMrozITUd1W/upFIbhY4/DNMWbmh9LhJlJgXOi3vwMmUCfdj23Buve5eMGk09+r6YAg1DeVCf AvSGxNLVs4mmwDiuVyex5t668EijDqNRZqi6Qauo2Ewfbd5IbrcOeU2P4fmk46hSrq8hmJruB90O mFDMSR37U3SeXn7qYJk7Dp3dp3HJat6BsEORB2XscCNfQsdGokAXrFRvRd/YjPYDpjAgTmAP0Gjk oRT1vB8EX5NGOvbrSw0Dm/wYkgmYk+98CvgU8CngU8CngE8BnwI+BXwK+BTwKeBTwKeATwGfAj4F fAr4FPApMIAU+H8hKvI8Sr+QoQAAAABJRU5ErkJggg=="
      />
    </svg>
  );
}
