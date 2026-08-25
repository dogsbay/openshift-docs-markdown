{%- set _mod_docs_content_type = "PROCEDURE" %}
# Converting an S2I component into a devfile component {id="converting-an-s2i-component-into-a-devfile-component_{{ context }}"}

With `{{ odo_title }}`, you can create both Source-to-Image (S2I) and devfile components. If you have an existing S2I component, you can convert it into a devfile component using the `odo utils` command.

**Procedure**

Run all the commands from the S2I component directory.

1.  Run the `odo utils convert-to-devfile` command, which creates `devfile.yaml` and `env.yaml` based on your component:
    ```terminal
    $ odo utils convert-to-devfile
    ```
1.  Push the component to your cluster:
    ```terminal
    $ odo push
    ```

    :::note

    If the devfile component deployment failed, delete it by running: `odo delete -a`
    
    :::

1.  Verify that the devfile component deployed successfully:
    ```terminal
    $ odo list
    ```
1.  Delete the S2I component:
    ```terminal
    $ odo delete --s2i
    ```