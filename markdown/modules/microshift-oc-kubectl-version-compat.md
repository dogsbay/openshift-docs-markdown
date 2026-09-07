{%- set _mod_docs_content_type = "REFERENCE" %}
# oc and server version compatibility {id="microshift-oc-kubectl-version-compat_{{ context }}"}


:::important

If you installed an earlier version of `oc`, you might not be able use it to complete all of the commands in {{ microshift_short }} {{ product_version }}. If you want the latest features, you must download and install the latest version of `oc` that corresponds with your {{ microshift_short }} version.

:::


Using new capabilities often requires the latest `oc` binary. A 4.22 server might have additional capabilities that a previous version of the `oc` binary cannot use. In addition, the 4.22 `oc` binary might have additional capabilities that are unsupported by a previous-version server.

**Compatibility Matrix**

|     |     |     |
| --- | --- | --- |
|  | **X.Y** (`oc` Client) | **X.Y+N** [^versionpolicyn] (`oc` Client) |
| **X.Y** (Server) | Fully compatible. | The `oc` CLI tool might provide options and features that are not compatible with the accessed server. |
| **X.Y+N** [^versionpolicyn] (Server) | The `oc` CLI tool might not be able to access server features. | Fully compatible. |

[^versionpolicyn]: Where **N** is a number greater than or equal to 1.