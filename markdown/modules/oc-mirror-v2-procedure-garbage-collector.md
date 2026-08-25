{%- set _mod_docs_content_type = "PROCEDURE" %}
# Resolving storage cleanup issues in the distribution registry {id="oc-mirror-v2-procedure-garbage-collector_{{ context }}"}

A known issue in the distribution registry prevents the garbage collector from freeing up storage as expected. This issue does not occur when you use {{ quay }}. {._abstract}

**Procedure**

*   Choose the appropriate method to work around the known issue in the distribution registry:
    *   To restart the container registry, run the following command:
        ```terminal
        $ podman restart <registry_container>
        ```
    *   To disable caching in the registry configuration, perform the following steps:
        1.  To disable the `blobdescriptor` cache, modify the `/etc/docker/registry/config.yml` file:
            ```yaml
            version: 0.1
            log:
              fields:
                service: registry
            storage:
              cache:
                blobdescriptor: ""
              filesystem:
                rootdirectory: /var/lib/registry
            http:
              addr: :5000
              headers:
                X-Content-Type-Options: [nosniff]
            health:
              storagedriver:
                enabled: true
                interval: 10s
                threshold: 3
            ```
        1.  To apply the changes, restart the container registry by running the following command:
            ```terminal
            $ podman restart <registry_container>
            ```