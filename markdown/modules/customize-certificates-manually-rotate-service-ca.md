{%- set _mod_docs_content_type = "PROCEDURE" %}
# Manually rotate the service CA certificate {id="manually-rotate-service-ca_{{ context }}"}

To refresh the service Certificate Authority (CA) certificate in {{ product_title }} outside the automatic renewal cycle, you can delete the `signing-key` secret in the `openshift-service-ca` namespace. Restart pods so that services use certificates signed by the new CA. {._abstract}

The service CA is valid for 26 months and is automatically refreshed when less than 13 months of validity remain.


:::warning

A manually-rotated service CA does not maintain trust with the previous service CA. You might experience a temporary service disruption until the pods in the cluster are restarted, which ensures that pods are using service serving certificates issued by the new service CA.

:::


**Prerequisites**

*   You must be logged in as a cluster admin.

**Procedure**

1.  View the expiration date of the current service CA certificate by
using the following command.
    ```terminal
    $ oc get secrets/signing-key -n openshift-service-ca \
         -o template='{{index .data "tls.crt"}}' \
         | base64 --decode \
         | openssl x509 -noout -enddate
    ```
1.  Manually rotate the service CA. This process generates a new service CA
which will be used to sign the new service certificates.
    ```terminal
    $ oc delete secret/signing-key -n openshift-service-ca
    ```
1.  To apply the new certificates to all services, restart all the pods
in your cluster. This command ensures that all services use the
updated certificates.
    ```terminal
    $ for I in $(oc get ns -o jsonpath='{range .items[*]} {.metadata.name}{"\n"} {end}'); \
          do oc delete pods --all -n $I; \
          sleep 1; \
          done
    ```

    :::warning

    This command will cause a service interruption, as it goes through and
    deletes every running pod in every namespace. These pods will automatically
    restart after they are deleted.
    
    :::