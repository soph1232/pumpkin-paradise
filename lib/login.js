
<SCRIPT LANGUAGE="JavaScript">

function Getstats()
{
window.status=('Attempting to Login to user area.')

var AccId;
var iName;
AccId = document.iAccInput.iAccID.value
iName = document.iAccInput.iName.value

if (AccId == "" || iName == "")
{
alert('\nERROR\nYou must enter ALL Details,\nto View your statistics.\n');
window.status=('Missing data or Invalid. Check spelling and Ensure Names are in Correct Case.')
}
else
{

var location=(iName + ".html");
this.location.href = location;
window.status=(' Verifying: ' + iName +' Please wait........');
}
}

</SCRIPT>
<hr><FORM NAME="iAccInput">
<CENTER>
<TABLE BORDER="1px" bordercolor="#c0c0c0" cellpadding="5" cellspacing="0">
    <TR>
        <TD ALIGN="RIGHT">
            <p><FONT SIZE="3" FACE="Arial"><B>User Name:</B></FONT>
              </p></td>

        <TD>
            <INPUT TYPE="TEXT" NAME="iName" MAXLENGTH="15">
        </td>
        <TD> &nbsp;
        </td>
    </tr>
    <tr>
        <TD ALIGN="RIGHT">

            <p><FONT SIZE="3" FACE="Arial"><B>Password:</B></FONT>
              </p></TD>
        <td>
            <INPUT NAME="iAccID" MAXLENGTH="15" HEIGHT="50">
        </TD>
        <td align="center">
            <INPUT TYPE="BUTTON" VALUE=" Login " onClick="Getstats()" HEIGHT="40" WIDTH="50"><BR><br>
            <INPUT TYPE="RESET" VALUE=" Reset " onClick="window.status=('RESET: Please enter your USERNAME and ACCOUNT ID.')" WIDTH="50">

        </td>
    </TR>
</TABLE>
