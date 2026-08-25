{%- set _mod_docs_content_type = "PROCEDURE" %}
# Entering the must-gather command in a disconnected environment {id="hcp-must-gather-dc_{{ context }}"}

When you need to troubleshoot an issue in a disconnected environment, you can gather information by running the `must-gather` command. The command generates output for the management cluster and the hosted cluster. {._abstract}

**Procedure**

1.  In a disconnected environment, mirror the Red&#160;Hat Operator catalog images into their mirror registry. For more information, see "Install on disconnected networks".
1.  Run the following command to extract logs that reference the image from their mirror registry:
    ```terminal
    REGISTRY=registry.example.com:5000
    IMAGE=$REGISTRY/rhacm2/acm-must-gather-rhel9:v2.17

    $ oc adm must-gather \
      --image=$IMAGE /usr/bin/gather \
      hosted-cluster-namespace=HOSTEDCLUSTERNAMESPACE \
      hosted-cluster-name=HOSTEDCLUSTERNAME \
      --dest-dir=./data
    ```