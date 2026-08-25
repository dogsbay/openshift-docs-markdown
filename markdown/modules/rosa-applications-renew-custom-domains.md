{%- set _mod_docs_content_type = "PROCEDURE" %}
# Renewing a certificate for custom domains {id="rosa-applications-renew-custom-domains_{{ context }}"}

You can renew certificates with the Custom Domains Operator (CDO) by using the `oc` CLI tool. {._abstract}

**Prerequisites**

*   You have the latest version `oc` CLI tool installed.

**Procedure**

1.  Create new secret
    ```terminal
    $ oc create secret tls <secret-new> --cert=fullchain.pem --key=privkey.pem -n <my_project>
    ```
1.  Patch CustomDomain CR
    ```terminal
    $ oc patch customdomain <company_name> --type='merge' -p '{"spec":{"certificate":{"name":"<secret-new>"}}}'
    ```
1.  Delete old secret
    ```terminal
    $ oc delete secret <secret-old> -n <my_project>
    ```

**Troubleshooting**

*   [Error creating TLS secret](https://access.redhat.com/solutions/5419501)