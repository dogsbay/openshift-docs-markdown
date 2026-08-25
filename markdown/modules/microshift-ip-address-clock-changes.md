{%- set _mod_docs_content_type = "CONCEPT" %}
# IP address changes or clock adjustments {id="microshift-ip-address-clock-changes_{{ context }}"}

{{ microshift_short }} depends on device IP addresses and system-wide clock settings to remain consistent during its runtime. However, these settings might occasionally change on edge devices. {._abstract}

For example, DHCP or Network Time Protocol (NTP) updates can change times. When these changes occur, some {{ microshift_short }} components might stop functioning properly. To mitigate this situation, {{ microshift_short }} monitors the IP address and system time and restarts if either setting changes.

The threshold for a clock-driven restart is a time change of greater than 10 seconds in either direction. Small drifts during regular NTP service adjustments do not trigger a restart.