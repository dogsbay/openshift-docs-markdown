{%- set _mod_docs_content_type = "PROCEDURE" %}
# Accessing the web terminal {id="odc-access-web-terminal_{{ context }}"}

After the {{ web_terminal_op }} is installed, you can access the web terminal. After the web terminal is initialized, you can use the preinstalled CLI tools such as `oc`, `kubectl`, `odo`, `kn`, `tkn`, `helm`, and `subctl` in the web terminal.
You can re-run commands by selecting them from the list of commands you have run in the terminal. These commands persist across multiple terminal sessions.
The web terminal remains open until you close it or until you close the browser window or tab. {._abstract}

**Prerequisites**

*   You have access to 
{%- if not (openshift_rosa_hcp or openshift_rosa) %}
an {{ product_title }} 
{%- endif %}
{%- if openshift_rosa_hcp or openshift_rosa %}
a {{ product_title }} 
{%- endif %}
cluster and are logged into the web console.
*   The {{ web_terminal_op }} is installed on your cluster.

**Procedure**

1.  To launch the web terminal, click the command-line terminal icon (![odc-wto-icon](/images/odc-wto-icon.png "wto icon")) in the masthead of the console. A web terminal instance is displayed in the **Command line terminal** pane. This instance is automatically logged in with your credentials.
1.  If a project has not been selected in the current session, select the project where the `DevWorkspace` CR must be created from the **Project** drop-down list. By default, the current project is selected.

    :::note

    *   One `DevWorkspace` CR defines the web terminal of one user. This CR contains details about the user’s web terminal status and container image components.
    *   The `DevWorkspace` CR is created only if it does not already exist.
{%- if not (openshift_rosa or openshift_dedicated) %}
    *   The `openshift-terminal` project is the default project used for cluster administrators. They do not have the option to choose another project. The {{ web_terminal_op }} installs the DevWorkspace Operator as a dependency.
{%- endif %}
    
    :::


{% if not (openshift_rosa or openshift_dedicated) %}
1.  Optional: Set the web terminal timeout for the current session:
    1.  Click Timeout.
    1.  In the field that is displayed, enter the timeout value.
    1.  From the drop-down list, select a timeout interval of **Seconds**, **Minutes**, **Hours**, or **Milliseconds**.
1.  Optional: Select a custom image for the web terminal to use.
    1.  Click Image.
    1.  In the field that is displayed, enter the URL of the image that you want to use.
{% endif %}
1.  Click **Start** to initialize the web terminal using the selected project.
1.  Click **+** to open multiple tabs within the web terminal in the console.