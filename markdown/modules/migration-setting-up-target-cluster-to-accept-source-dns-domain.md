{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting up the target cluster to accept the source DNS domain {id="migration-setting-up-target-cluster-to-accept-source-dns-domain_{{ context }}"}

You can set up the target cluster to accept requests for a migrated application in the DNS domain of the source cluster.

**Procedure**

For both non-secure HTTP access and secure HTTPS access, perform the following steps:

1.  Create a route in the target cluster’s project that is configured to accept requests addressed to the application’s FQDN in the source cluster:
    ```terminal
    $ oc expose svc <app1-svc> --hostname <app1.apps.source.example.com> \
     -n <app1-namespace>
    ```

    With this new route in place, the server accepts any request for that FQDN and sends it to the corresponding application pods.
    In addition, when you migrate the application, another route is created in the target cluster domain. Requests reach the migrated application using either of these hostnames.
1.  Create a DNS record with your DNS provider that points the application’s FQDN in the source cluster to the IP address of the default load balancer of the target cluster. This will redirect traffic away from your source cluster to your target cluster.

    The FQDN of the application resolves to the load balancer of the target cluster. The default Ingress Controller router accept requests for that FQDN because a route for that hostname is exposed.

For secure HTTPS access, perform the following additional step:

1.  Replace the x509 certificate of the default Ingress Controller created during the installation process with a custom certificate.
1.  Configure this certificate to include the wildcard DNS domains for both the source and target clusters in the `subjectAltName` field.

    The new certificate is valid for securing connections made using either DNS domain.