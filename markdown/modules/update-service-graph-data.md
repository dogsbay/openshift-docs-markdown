{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the OpenShift Update Service graph data container image {id="update-service-graph-data_{{ context }}"}

The OpenShift Update Service requires a graph data container image, from which the OpenShift Update Service retrieves information about channel membership and blocked update edges. Graph data is typically fetched directly from the update graph data repository. In environments where an internet connection is unavailable, loading this information from an init container is another way to make the graph data available to the OpenShift Update Service.  {._abstract}

The role of the init container is to provide a local copy of the graph data, and during pod initialization, the init container copies the data to a volume that is accessible by the service.


:::note

The oc-mirror OpenShift CLI (`oc`) plugin creates this graph data container image in addition to mirroring release images. If you used the oc-mirror plugin to mirror your release images, you can skip this procedure.

:::


**Procedure**

1.  Create a Dockerfile, for example, `./Dockerfile`, containing the following information:
    ```terminal
    FROM registry.access.redhat.com/ubi9/ubi:latest

    RUN curl -L -o cincinnati-graph-data.tar.gz https://api.openshift.com/api/upgrades_info/graph-data

    RUN mkdir -p /var/lib/cincinnati-graph-data && tar xvzf cincinnati-graph-data.tar.gz -C /var/lib/cincinnati-graph-data/ --no-overwrite-dir --no-same-owner

    CMD ["/bin/bash", "-c" ,"exec cp -rp /var/lib/cincinnati-graph-data/* /var/lib/cincinnati/graph-data"]
    ```
1.  Use the docker file created in the above step to build a graph data container image, for example, `registry.example.com/openshift/graph-data:latest`:
    ```terminal
    $ podman build -f ./Dockerfile -t registry.example.com/openshift/graph-data:latest
    ```
1.  Push the graph data container image created in the previous step to a repository that is accessible to the OpenShift Update Service, for example, `registry.example.com/openshift/graph-data:latest`:
    ```terminal
    $ podman push registry.example.com/openshift/graph-data:latest
    ```

    :::note

    To push a graph data image to a registry in a disconnected environment, copy the graph data container image created in the previous step to a repository that is accessible to the OpenShift Update Service. Run `oc image mirror --help` for available options.
    
    :::