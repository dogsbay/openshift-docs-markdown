{%- set _mod_docs_content_type = "PROCEDURE" %}
# Log out of the {{ rosa_cli }} {id="rosa-logout_{{ context }}"}

Log out of `rosa`. Logging out also removes the `rosa` configuration file. {._abstract}

**Procedure**

*   Log out of your `rosa` session by running the following command:
    ```terminal
    $ rosa logout [arguments]
    ```

    **Optional arguments inherited from parent commands**

    | Option | Definition |
    | --- | --- |
    | --help | Shows help for this command. |
    | --debug | Enables debug mode. |
    | --profile | Specifies an AWS profile (string) from your credentials file. |