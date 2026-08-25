{%- set _mod_docs_content_type = "PROCEDURE" %}

# Setting and unsetting environment variables {id="setting-and-unsetting-environment-variables._{{ context }}"}

**Procedure**

*   To set an environment variable in a component:
    ```terminal
    $ odo config set --env <variable>=<value>
    ```
*   To unset an environment variable in a component:
    ```terminal
    $ odo config unset --env <variable>
    ```
*   To list all environment variables in a component:
    ```terminal
    $ odo config view
    ```