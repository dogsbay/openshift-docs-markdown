{%- set _mod_docs_content_type = "CONCEPT" %}
# Kubeconfig files for configuring node access {id="kubeconfig-files-overview_{{ context }}"}

The two categories of `kubeconfig` files used in {{ microshift_short }} are local access and remote access. Each time {{ microshift_short }} starts, it generates a set of `kubeconfig` files for accessing the API server. These files are created in the `/var/lib/microshift/resources/kubeadmin/` directory by using existing configuration information. {._abstract}

Each access type requires a different authentication certificate signed by different Certificate Authorities (CAs). The generation of multiple `kubeconfig` files accommodates this need.

You can use the appropriate `kubeconfig` file for the access type needed in each case to provide authentication details. The contents of {{ microshift_short }} `kubeconfig` files are determined by either default built-in values or a `config.yaml` file.


:::note

A `kubeconfig` file must exist for the cluster to be accessible. The values are applied from built-in default values or a customized `config.yaml` file.

:::


```terminal title="Example contents of the kubeconfig files"
/var/lib/microshift/resources/kubeadmin/
├── kubeconfig
├── alt-name-1
│   └── kubeconfig
├── 1.2.3.4
│   └── kubeconfig
└── microshift-rhel9
    └── kubeconfig
```

where:


`kubeconfig`
:   Specifies the local hostname. The main IP address of the host is always the default.

`alt-name-1`
:   Specifies the subject alternative name for the API server certificate.

`1.2.3.4`
:   Specifies the DNS name.

`microshift-rhel9`
:   Specifies the {{ microshift_short }} hostname.