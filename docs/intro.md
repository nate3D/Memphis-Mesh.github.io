---
sidebar_position: 1
---

# Tutorial Introduction

This is a quick-start guide for using Meshtastic in and around Memphis. This is meant to augment the official documentation and other sources.

## Getting Started

[Follow the getting started guide first](https://meshtastic.org/docs/getting-started/).

## Configure Your Node

### LoRa Config

| Setting | Value |
| --------- | ------- |
| Region | United States |
| Use Preset | True |
| Preset | Medium Range - Fast |
| Ignore MQTT | False |
| Ok to MQTT | True (optional -- results in your data being published online) |
| Transmit Enabled | True (optional -- if you want to be able to send messages) |
| Number of hops | 3 (default) |
| Frequency Slot | 0 (default) |

### User

| Setting | Value |
| --------- | ------- |
| Long Name | A descriptive name identifying you and this particular node |
| Short Name | A short, unique abbreviation for your node |
| Licensed Operator | False (required to be able to connect properly) |

### Position

| Setting | Value |
| --------- | ------- |
| Smart Position Minimum Interval | Two Minutes |
| Device GPS | Disabled and Fixed Position (for fixed nodes) |

## Additional Configuration to Uplink

If you'd like your node to contribute to the mesh via the internet and serve as an uplink, follow these additional steps:

### Module Configuration: MQTT

| Setting | Value |
| --------- | ------- |
| Enabled | True |
| MQTT Client Proxy | True (uses your bluetooth-connected device as a proxy to the MQTT server) |
| Connect to MQTT via Proxy | True (uses your bluetooth-connected device as a proxy to the MQTT server; enable if previous is set to True) |
| Encyption Enabled | True |
| Map Report Enabled | True |
| Consent to Share Unencrypted Data | True (optional -- if you want to share unencrypted data online) |
| Root Topic | msh/US/memphismesh.com |

### Channels: 0 Primary

| Setting | Value |
| --------- | ------- |
| MQTT Uplink Enabled | True |
