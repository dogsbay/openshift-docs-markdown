{%- set _mod_docs_content_type = "PROCEDURE" %}
# Unidling applications {id="idle-unidling-applications_{{ context }}"}

Restore normal application operations by scaling up the replicas when network traffic is directed back to the idled resources. {._abstract}

Application services become active again when they receive network traffic and are scaled back up to their previous state. This includes both traffic to the services and traffic passing through routes. Applications can also be manually unidled by scaling up the resources.

**Procedure**

*   To scale up a DeploymentConfig, run:
    ```terminal
    $ oc scale --replicas=1 dc <dc_name>
    ```

    :::note

    Automatic unidling by a router is currently only supported by the default
    HAProxy router.
    
    :::