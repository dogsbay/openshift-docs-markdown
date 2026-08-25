{%- set _mod_docs_content_type = "PROCEDURE" %}
# Executing remote commands in containers {id="nodes-containers-remote-commands-about_{{ context }}"}

You can use the {{ oc_first }} to execute remote commands in {{ product_title }} containers. By running commands in a container, you can perform troubleshooting, inspect logs, run scripts, and other tasks. {._abstract}

**Procedure**

*   Use a command similar to the following to run a command in a container:
    ```terminal
    $ oc exec <pod> [-c <container>] -- <command> [<arg_1> ... <arg_n>]
    ```

    For example:
    ```terminal
    $ oc exec mypod date
    ```
    ```terminal title="Example output"
    Thu Apr  9 02:21:53 UTC 2015
    ```

    :::important

    [For security purposes](https://access.redhat.com/errata/RHSA-2015:1650), the
    `oc exec` command does not work when accessing privileged containers except when
    the command is executed by a `cluster-admin` user.
    
    :::