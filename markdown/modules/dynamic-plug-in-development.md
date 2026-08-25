{%- set _mod_docs_content_type = "PROCEDURE" %}
# Dynamic plugin development {id="dynamic-plugin-development_{{ context }}"}

You can run the plugin using a local development environment. The {{ product_title }} web console runs in a container connected to the cluster you have logged into. {._abstract}

**Prerequisites**

*   You must have cloned the [`console-plugin-template`](https://github.com/openshift/console-plugin-template) repository, which contains a template for creating plugins.

    :::important

    Red&#160;Hat does not support custom plugin code. Only [Cooperative community support](https://access.redhat.com/solutions/5893251) is available for your plugin.
    
    :::

*   You must have 
{%- if not (openshift_rosa_hcp or openshift_rosa) %}
an {{ product_title }} 
{%- endif %}
{%- if openshift_rosa_hcp or openshift_rosa %}
a {{ product_title }} 
{%- endif %}
cluster running.
*   You must have the {{ oc_first }} installed.
*   You must have [`yarn`](https://yarnpkg.com/) installed.
*   You must have [Docker](https://www.docker.com/) v3.2.0 or later or [Podman](https://podman.io/) v3.2.0 or later installed and running.

**Procedure**

1.  Open two terminal windows.
1.  In one terminal window, run the following command to install the dependencies for your plugin using yarn.

    ```terminal
    $ yarn install
    ```
1.  After installing, run the following command to start yarn.
    ```terminal
    $ yarn run start
    ```
1.  In another terminal window, login to the {{ product_title }} web console through the CLI.
    ```terminal
    $ oc login
    ```
1.  Run the {{ product_title }} web console in a container connected to the cluster you have logged in to by running the following command:
    ```terminal
    $ yarn run start-console
    ```

    :::note

    The `yarn run start-console` command runs an `amd64` image and might fail when run with Apple Silicon and Podman. You can work around it with `qemu-user-static` by running the following commands:

    ```terminal
    $ podman machine ssh
    ```

    ```terminal
    $ sudo -i
    ```

    ```terminal
    $ rpm-ostree install qemu-user-static
    ```

    ```terminal
    $ systemctl reboot
    ```
    
    :::


**Verification**

*   Visit [localhost:9000](http://localhost:9000/example) to view the running plugin. Inspect the value of `window.SERVER_FLAGS.consolePlugins` to see the list of plugins which load at runtime.