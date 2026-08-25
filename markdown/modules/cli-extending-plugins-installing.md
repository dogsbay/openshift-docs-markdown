{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing and using CLI plugins {id="cli-installing-plugins_{{ context }}"}

After you write a custom plugin for the {{ oc_first }}, you must install the plugin before you can use it. {._abstract}

**Prerequisites**

*   You must have the `oc` CLI tool installed.
*   You must have a CLI plugin file that begins with `oc-` or `kubectl-`.

**Procedure**

1.  If necessary, update the plugin file to be executable.
    ```terminal
    $ chmod +x <plugin_file>
    ```
1.  Place the file anywhere in your `PATH`, such as `/usr/local/bin/`.
    ```terminal
    $ sudo mv <plugin_file> /usr/local/bin/.
    ```
1.  Run `oc plugin list` to make sure that the plugin is listed.
    ```terminal
    $ oc plugin list
    ```
    ```terminal title="Example output"
    The following compatible plugins are available:

    /usr/local/bin/<plugin_file>
    ```

    If your plugin is not listed here, verify that the file begins with `oc-` or `kubectl-`, is executable, and is on your `PATH`.
1.  Invoke the new command or option introduced by the plugin.

    For example, if you built and installed the `kubectl-ns` plugin from the [Sample plugin repository](https://github.com/kubernetes/sample-cli-plugin), you can use the following command to view the current namespace:
    ```terminal
    $ oc ns
    ```

    Note that the command to invoke the plugin depends on the plugin file name.
    For example, a plugin with the file name of `oc-foo-bar` is invoked by the `oc foo bar` command.