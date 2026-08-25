{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the web terminal image for a session {id="odc-configure-web-terminal-image-session_{{ context }}"}

You can change the default image for the web terminal for your current session. {._abstract}

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

1.  Click the web terminal icon (![title="web terminal icon"](/_assets/images/odc-wto-icon.png)).
1.  Click **Image** to display advanced configuration options for the web terminal image.
1.  Enter the URL of the image that you want to use.
1.  Click **Start** to begin a terminal instance using the specified image setting.