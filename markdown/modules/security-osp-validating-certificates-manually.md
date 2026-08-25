{%- set _mod_docs_content_type = "PROCEDURE" %}
# Scanning {{ rh_openstack }} endpoints for legacy HTTPS certificates manually {id="security-osp-validating-certificates-manually_{{ context }}"}

Starting in {{ product_title }} 4.10, HTTPS certificates require subject alternative name (SAN) fields. If you do not have access to the prerequisite tools that are listed in "Scanning {{ rh_openstack }} endpoints for legacy HTTPS certificates", you can perform certain steps.  {._abstract}

These steps scan each HTTPS endpoint in a {{ rh_openstack_first }} catalog for legacy certificates that only contain the `CommonName` field.


:::important

{{ product_title }} does not check the underlying {{ rh_openstack }} infrastructure for legacy certificates before installation or updates. Use the procedure steps to check for these certificates yourself. Failing to update legacy certificates before installing or updating a cluster might result in issues for your cluster.

:::


**Procedure**

1.  On a command line, run the following command to view the URL of {{ rh_openstack }} public endpoints:
    ```terminal
    $ openstack catalog list
    ```

    Record the URL for each HTTPS endpoint that the command returns.
1.  For each public endpoint, note the host and the port.

    :::tip

    Determine the host of an endpoint by removing the scheme, the port, and the path.
    
    :::

1.  For each endpoint, run the following commands to extract the SAN field of the certificate:
    1.  Set a `host` variable:
        ```terminal
        $ host=<host_name>
        ```
    1.  Set a `port` variable:
        ```terminal
        $ port=<port_number>
        ```

        If the URL of the endpoint does not have a port, use the value `443`.
    1.  Retrieve the SAN field of the certificate:
        ```terminal
        $ openssl s_client -showcerts -servername "$host" -connect "$host:$port" </dev/null 2>/dev/null \
            | openssl x509 -noout -ext subjectAltName
        ```
        ```terminal title="Example output"
        X509v3 Subject Alternative Name:
            DNS:your.host.example.net
        ```

        For each endpoint, look for output that resembles the previous example. If there is no output for an endpoint, the certificate of that endpoint is invalid and must be re-issued.

        :::important

        You must replace all legacy HTTPS certificates before you install {{ product_title }} 4.10 or update a cluster to that version. Legacy certificates are rejected with the following message:

        ```txt
        x509: certificate relies on legacy Common Name field, use SANs instead
        ```
        
        :::