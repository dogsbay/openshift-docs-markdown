{%- set _mod_docs_content_type = "REFERENCE" %}
# Command-line arguments for ovn-sbctl to examine southbound database contents {id="nw-ovn-kubernetes-examine-sb-database-contents-ref_{{ context }}"}

The following table describes the command-line arguments that can be used with `ovn-sbctl` to examine the contents of the southbound database.


:::note

Open a remote shell in the pod you wish to view the contents of and then run the `ovn-sbctl` commands.

:::


**Command-line arguments to examine southbound database contents**

| Argument | Description |
| --- | --- |
| `ovn-sbctl show` | An overview of the southbound database contents as seen from a specific node. |
| `ovn-sbctl list Port_Binding <port>` | List the contents of southbound database for a the specified port . |
| `ovn-sbctl dump-flows` | List the logical flows. |