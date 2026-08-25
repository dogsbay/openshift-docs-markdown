{%- set _mod_docs_content_type = "CONCEPT" %}
# Operator group membership {id="olm-operatorgroups-membership_{{ context }}"}

An Operator becomes a member of an Operator group when its cluster service version (CSV) is in the same namespace and its install modes support the group’s target namespaces. {._abstract}

An install mode in a CSV consists of an `InstallModeType` field and a boolean `Supported` field. The spec of a CSV can contain a set of install modes of four distinct `InstallModeTypes`:

**Install modes and supported Operator groups**

| InstallModeType | Description |
| --- | --- |
| `OwnNamespace` | The Operator can be a member of an Operator group that selects its own namespace. |
| `SingleNamespace` | The Operator can be a member of an Operator group that selects one namespace. |
| `MultiNamespace` | The Operator can be a member of an Operator group that selects more than one namespace. |
| `AllNamespaces` | The Operator can be a member of an Operator group that selects all namespaces (target namespace set is the empty string `""`). |


:::note

If the spec of a CSV omits an entry of `InstallModeType`, then that type is considered unsupported unless support can be inferred by an existing entry that implicitly supports it.

:::