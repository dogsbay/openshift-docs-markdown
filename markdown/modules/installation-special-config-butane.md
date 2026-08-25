{%- set _mod_docs_content_type = "CONCEPT" %}
# Creating machine configs with Butane {id="installation-special-config-butane_{{ context }}"}

Machine configs are used to configure control plane and compute machines by instructing machines how to create users and file systems, set up the network, install systemd units, and more. {._abstract}

Because modifying machine configs can be difficult, you can use Butane configs to create machine configs for you, thereby making node configuration much easier.