{%- set _mod_docs_content_type = "CONCEPT" %}
# The multicast DNS protocol {id="microshift-mDNS_{{ context }}"}

To allow name resolution and service discovery within a Local Area Network (LAN) using multicast exposed on the `5353/UDP` port, you can use the multicast DNS protocol (mDNS). {._abstract}

{{ microshift_short }} includes an embedded mDNS server for deployment scenarios in which the authoritative DNS server cannot be reconfigured to point clients to services on {{ microshift_short }}. The embedded DNS server allows `.local` domains exposed by {{ microshift_short }} to be discovered by other elements on the LAN.