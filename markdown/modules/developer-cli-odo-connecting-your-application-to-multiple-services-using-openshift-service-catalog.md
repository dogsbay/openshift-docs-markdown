{%- set _mod_docs_content_type = "PROCEDURE" %}

# Connecting your application to multiple services using OpenShift Service Catalog {id="connecting-your-application-to-multiple-services-using-openshift-service-catalog_{{ context }}"}

The OpenShift service catalog is an implementation of the Open Service Broker API (OSB API) for Kubernetes. You can use it to connect applications deployed in {{ product_title }} to a variety of services.

**Prerequisites**

*   You have a running {{ product_title }} cluster.
*   The service catalog is installed and enabled on your cluster.

**Procedure**

*   To list the services:
    ```terminal
    $ odo catalog list services
    ```
*   To use service catalog-related operations:
    ```terminal
    $ odo service <verb> <service_name>
    ```