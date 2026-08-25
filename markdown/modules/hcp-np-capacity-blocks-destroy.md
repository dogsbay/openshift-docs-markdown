{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting a hosted cluster after configuring node pool capacity blocks {id="hcp-np-capacity-blocks-destroy_{{ context }}"}

After you configure node pool capacity blocks, you can optionally delete a hosted cluster and uninstall the HyperShift Operator. {._abstract}

**Procedure**

1.  To delete a hosted cluster, run a command similar to the following example:
    ```terminal
    $ hcp destroy cluster aws \
      --name cb-np-hcp \
      --aws-creds $HOME/.aws/credentials \
      --namespace clusters \
      --region us-east-2
    ```
1.  To uninstall the HyperShift Operator, run the following command:
    ```terminal
    $ hcp install render --format=yaml | oc delete -f -
    ```