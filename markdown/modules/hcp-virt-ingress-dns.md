{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the default ingress and DNS for {{ hcp }} on {{ VirtProductName }} {id="hcp-virt-ingress-dns_{{ context }}"}

Every {{ product_title }} cluster includes a default application Ingress Controller, which must have an wildcard DNS record associated with it.  {._abstract}

By default, hosted clusters that are created by using {{ VirtProductName }} automatically become a subdomain of the {{ product_title }} cluster that the virtual machines run on.

For example, your {{ product_title }} cluster might have the following default ingress DNS entry:

```terminal
*.apps.mgmt-cluster.example.com
```

As a result, a hosted cluster that is named `guest` and that runs on that underlying {{ product_title }} cluster has the following default ingress:

```terminal
*.apps.guest.apps.mgmt-cluster.example.com
```

**Procedure**

*   For the default ingress DNS to work properly, the cluster that hosts the virtual machines must allow wildcard DNS routes. You can configure this behavior by entering the following command:
    ```terminal
    $ oc patch ingresscontroller -n openshift-ingress-operator default \
      --type=json \
      -p '[{ "op": "add", "path": "/spec/routeAdmission", "value": {wildcardPolicy: "WildcardsAllowed"}}]'
    ```

    :::note

    When you use the default hosted cluster ingress, connectivity is limited to HTTPS traffic over port 443. Plain HTTP traffic over port 80 is rejected. This limitation applies to only the default ingress behavior.
    
    :::