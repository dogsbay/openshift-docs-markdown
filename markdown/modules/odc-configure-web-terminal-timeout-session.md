{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the web terminal timeout for a session {id="odc-configure-web-terminal-timeout-session_{{ context }}"}

You can change the default timeout period for the web terminal for your current session. {._abstract}

**Prerequisites**

*   You have access to 
{%- if not (openshift_rosa_hcp or openshift_rosa) %}
an {{ product_title }} 
{%- endif %}
{%- if openshift_rosa_hcp or openshift_rosa %}
a {{ product_title }} 
{%- endif %}
cluster that has the {{ web_terminal_op }} installed.
*   You are logged into the web console.

**Procedure**

1.  Click the web terminal icon (![odc-wto-icon](/images/odc-wto-icon.png "web terminal icon")).
1.  Optional: Set the web terminal timeout for the current session:
    1.  Click Timeout.
    1.  In the field that is displayed, enter the timeout value.
    1.  From the drop-down list, select a timeout interval of **Seconds**, **Minutes**, **Hours**, or **Milliseconds**.
1.  Optional: Select a custom image for the web terminal to use.
    1.  Click Image.
    1.  In the field that is displayed, enter the URL of the image that you want to use.
1.  Click **Start** to begin a terminal instance using the specified timeout setting.