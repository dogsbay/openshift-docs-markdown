{%- set _mod_docs_content_type = "PROCEDURE" %}
# Manually configuring CLI profiles {id="manual-configuration-of-cli-profiles-example_{{ context }}"}

If you want to manually configure your CLI configuration files, you can use the `oc config` command instead of directly modifying the files. {._abstract}


:::note

This section covers more advanced usage of CLI configurations. In most situations, you can use the `oc login` and `oc project` commands to log in and switch between contexts and projects.

:::


For more details on the available `oc config` subcommands, see the "CLI configuration subcommands" table.

**Procedure**

1.  Log in as a user that uses an access token. This token is used by the `alice` user:
    ```terminal
    $ oc login https://openshift1.example.com --token=ns7yVhuRNpDM9cgzfhhxQ7bM5s7N2ZVrkZepSRf4LC0
    ```
1.  View the cluster entry automatically created:
    ```terminal
    $ oc config view
    ```
    ```terminal title="Example output"
    apiVersion: v1
    clusters:
    - cluster:
        insecure-skip-tls-verify: true
        server: https://openshift1.example.com
      name: openshift1-example-com
    contexts:
    - context:
        cluster: openshift1-example-com
        namespace: default
        user: alice/openshift1-example-com
      name: default/openshift1-example-com/alice
    current-context: default/openshift1-example-com/alice
    kind: Config
    preferences: {}
    users:
    - name: alice/openshift1.example.com
      user:
        token: ns7yVhuRNpDM9cgzfhhxQ7bM5s7N2ZVrkZepSRf4LC0
    ```
1.  Update the current context to have users log in to the desired namespace:
    ```terminal
    $ oc config set-context `oc config current-context` --namespace=<project_name>
    ```
1.  Examine the current context, to confirm that the changes are implemented:
    ```terminal
    $ oc whoami -c
    ```

    All subsequent CLI operations uses the new context, unless otherwise specified by overriding CLI options or until the context is switched.