{%- set _mod_docs_content_type = "PROCEDURE" %}
# Generating a list of objects {id="templates-cli-generating-list-of-objects_{{ context }}"}

To preview objects a template creates on your {{ product_title }} cluster, run `oc process` on the template without applying it. Review the generated object list and save it to a file before you create resources in your project. {._abstract}

**Procedure**

*   Process a file defining a template to return the list of objects to standard output by running the following command:
    ```terminal
    $ oc process -f <filename>
    ```
*   Process an uploaded template in the current project to return the list of objects to standard output by running the following command:
    ```terminal
    $ oc process <template_name>
    ```
*   Create objects from a template by processing the template and piping the output to `oc create` by running the following command:
    ```terminal
    $ oc process -f <filename> | oc create -f -
    ```
*   Create objects from an uploaded template in the current project by processing the template and piping the output to `oc create` by running the following command:
    ```terminal
    $ oc process <template> | oc create -f -
    ```
*   You can override any parameter values defined in the file by adding the `-p` option for each `<name>=<value>` pair you want to override. A parameter reference appears in any text field inside the template items.

    For example, in the following the `POSTGRESQL_USER` and `POSTGRESQL_DATABASE` parameters of a template are overridden to output a configuration with customized environment variables:
    *   Create a list of objects from a template by running the following command:
        ```terminal
        $ oc process -f my-rails-postgresql \
            -p POSTGRESQL_USER=bob \
            -p POSTGRESQL_DATABASE=mydatabase
        ```
    *   Create the objects from the processed output by running the following command:
        ```terminal
        $ oc process -f my-rails-postgresql \
            -p POSTGRESQL_USER=bob \
            -p POSTGRESQL_DATABASE=mydatabase \
            | oc create -f -
        ```

        :::note

        You can redirect the JSON output to a file, or apply it directly without uploading the template by piping it to the `oc create` command.
        
        :::

    *   If you have a large number of parameters, you can store them in a file and then pass this file to `oc process` by running the following commands:
        ```terminal
        $ cat postgres.env
        ```
        ```terminal
        $ oc process -f my-rails-postgresql --param-file=postgres.env
        ```
        ```terminal title="Example output"
        POSTGRESQL_USER=bob
        POSTGRESQL_DATABASE=mydatabase
        ```
    *   You can also read parameter values from standard input by specifying "-" as the value of the `--param-file` option by running the following command:
        ```terminal
        $ sed s/bob/alice/ postgres.env | oc process -f my-rails-postgresql --param-file=-
        ```